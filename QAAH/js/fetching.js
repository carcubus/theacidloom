(async function () {
    const cacheVersion = Math.random();

    function updateRandomResources(root) {
        root.querySelectorAll('[href*="__MATH_RANDOM__"], [src*="__MATH_RANDOM__"]').forEach(function (el) {
            if (el.hasAttribute('href')) el.setAttribute('href', el.getAttribute('href').replaceAll('__MATH_RANDOM__', cacheVersion));
            if (el.hasAttribute('src')) el.setAttribute('src', el.getAttribute('src').replaceAll('__MATH_RANDOM__', cacheVersion));
        });
    }

    updateRandomResources(document);

    async function loadIncludes() {
        while (true) {
            const walker = document.createTreeWalker(document, NodeFilter.SHOW_COMMENT);
            let marker = null;
            while (walker.nextNode()) {
                if (walker.currentNode.nodeValue.trim().startsWith('fetch-include:')) {
                    marker = walker.currentNode;
                    break;
                }
            }
            if (!marker) break;

            const path = marker.nodeValue.trim().slice('fetch-include:'.length).trim();
            try {
                const response = await fetch(path);
                if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
                const html = await response.text();
                const template = document.createElement('template');
                template.innerHTML = html;
                updateRandomResources(template.content);
                marker.replaceWith(template.content);
            } catch (error) {
                console.error('No se pudo cargar el include:', path, error);
                marker.replaceWith(document.createComment('No se pudo cargar: ' + path));
            }
        }
    }

    // 1. Primero cargamos todos los includes de HTML
    await loadIncludes();

    // 2. Insertamos las plantillas pendientes (incluyendo jQuery y scripts)
    document.querySelectorAll('template[data-after-includes]').forEach(function (template) {
        template.replaceWith(template.content);
    });

    // 3. Pequeña pausa de seguridad para asegurar que el navegador procese el script de jQuery del CDN
    await new Promise(resolve => setTimeout(resolve, 50));

    // 4. Recogemos y ejecutamos los scripts restantes en orden estricto
    const scripts = Array.from(document.querySelectorAll('script')).filter(function (script) {
        return script.id !== 'fetch-include-loader' && script.closest('head') === null;
    });

    for (const oldScript of scripts) {
        const script = document.createElement('script');
        for (const attr of Array.from(oldScript.attributes)) script.setAttribute(attr.name, attr.value);
        if (oldScript.src) {
            script.src = oldScript.src.replaceAll('__MATH_RANDOM__', cacheVersion);
            await new Promise(function (resolve) {
                script.onload = resolve;
                script.onerror = function () {
                    console.error('No se pudo cargar el script:', script.src);
                    resolve();
                };
                document.body.appendChild(script);
            });
            oldScript.remove();
        } else {
            script.textContent = oldScript.textContent;
            oldScript.replaceWith(script);
        }
    }
})();