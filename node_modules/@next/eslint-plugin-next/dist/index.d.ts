declare const plugin: {
    rules: {
        'google-font-display': typeof import("./rules/google-font-display");
        'google-font-preconnect': typeof import("./rules/google-font-preconnect");
        'inline-script-id': typeof import("./rules/inline-script-id");
        'next-script-for-ga': typeof import("./rules/next-script-for-ga");
        'no-assign-module-variable': typeof import("./rules/no-assign-module-variable");
        'no-async-client-component': typeof import("./rules/no-async-client-component");
        'no-before-interactive-script-outside-document': typeof import("./rules/no-before-interactive-script-outside-document");
        'no-css-tags': typeof import("./rules/no-css-tags");
        'no-document-import-in-page': typeof import("./rules/no-document-import-in-page");
        'no-duplicate-head': typeof import("./rules/no-duplicate-head");
        'no-head-element': typeof import("./rules/no-head-element");
        'no-head-import-in-document': typeof import("./rules/no-head-import-in-document");
        'no-html-link-for-pages': typeof import("./rules/no-html-link-for-pages");
        'no-img-element': typeof import("./rules/no-img-element");
        'no-page-custom-font': typeof import("./rules/no-page-custom-font");
        'no-script-component-in-head': typeof import("./rules/no-script-component-in-head");
        'no-styled-jsx-in-document': typeof import("./rules/no-styled-jsx-in-document");
        'no-sync-scripts': typeof import("./rules/no-sync-scripts");
        'no-title-in-document-head': typeof import("./rules/no-title-in-document-head");
        'no-typos': typeof import("./rules/no-typos");
        'no-unwanted-polyfillio': typeof import("./rules/no-unwanted-polyfillio");
    };
    configs: {
        recommended: {
            plugins: string[];
            rules: {
                '@next/next/google-font-display': string;
                '@next/next/google-font-preconnect': string;
                '@next/next/next-script-for-ga': string;
                '@next/next/no-async-client-component': string;
                '@next/next/no-before-interactive-script-outside-document': string;
                '@next/next/no-css-tags': string;
                '@next/next/no-head-element': string;
                '@next/next/no-html-link-for-pages': string;
                '@next/next/no-img-element': string;
                '@next/next/no-page-custom-font': string;
                '@next/next/no-styled-jsx-in-document': string;
                '@next/next/no-sync-scripts': string;
                '@next/next/no-title-in-document-head': string;
                '@next/next/no-typos': string;
                '@next/next/no-unwanted-polyfillio': string;
                '@next/next/inline-script-id': string;
                '@next/next/no-assign-module-variable': string;
                '@next/next/no-document-import-in-page': string;
                '@next/next/no-duplicate-head': string;
                '@next/next/no-head-import-in-document': string;
                '@next/next/no-script-component-in-head': string;
            };
        };
        'core-web-vitals': {
            plugins: string[];
            extends: string[];
            rules: {
                '@next/next/no-html-link-for-pages': string;
                '@next/next/no-sync-scripts': string;
            };
        };
    };
};
declare const flatConfig: {
    recommended: {
        name: string;
        plugins: {
            '@next/next': {
                rules: {
                    'google-font-display': typeof import("./rules/google-font-display");
                    'google-font-preconnect': typeof import("./rules/google-font-preconnect");
                    'inline-script-id': typeof import("./rules/inline-script-id");
                    'next-script-for-ga': typeof import("./rules/next-script-for-ga");
                    'no-assign-module-variable': typeof import("./rules/no-assign-module-variable");
                    'no-async-client-component': typeof import("./rules/no-async-client-component");
                    'no-before-interactive-script-outside-document': typeof import("./rules/no-before-interactive-script-outside-document");
                    'no-css-tags': typeof import("./rules/no-css-tags");
                    'no-document-import-in-page': typeof import("./rules/no-document-import-in-page");
                    'no-duplicate-head': typeof import("./rules/no-duplicate-head");
                    'no-head-element': typeof import("./rules/no-head-element");
                    'no-head-import-in-document': typeof import("./rules/no-head-import-in-document");
                    'no-html-link-for-pages': typeof import("./rules/no-html-link-for-pages");
                    'no-img-element': typeof import("./rules/no-img-element");
                    'no-page-custom-font': typeof import("./rules/no-page-custom-font");
                    'no-script-component-in-head': typeof import("./rules/no-script-component-in-head");
                    'no-styled-jsx-in-document': typeof import("./rules/no-styled-jsx-in-document");
                    'no-sync-scripts': typeof import("./rules/no-sync-scripts");
                    'no-title-in-document-head': typeof import("./rules/no-title-in-document-head");
                    'no-typos': typeof import("./rules/no-typos");
                    'no-unwanted-polyfillio': typeof import("./rules/no-unwanted-polyfillio");
                };
                configs: {
                    recommended: {
                        plugins: string[];
                        rules: {
                            '@next/next/google-font-display': string;
                            '@next/next/google-font-preconnect': string;
                            '@next/next/next-script-for-ga': string;
                            '@next/next/no-async-client-component': string;
                            '@next/next/no-before-interactive-script-outside-document': string;
                            '@next/next/no-css-tags': string;
                            '@next/next/no-head-element': string;
                            '@next/next/no-html-link-for-pages': string;
                            '@next/next/no-img-element': string;
                            '@next/next/no-page-custom-font': string;
                            '@next/next/no-styled-jsx-in-document': string;
                            '@next/next/no-sync-scripts': string;
                            '@next/next/no-title-in-document-head': string;
                            '@next/next/no-typos': string;
                            '@next/next/no-unwanted-polyfillio': string;
                            '@next/next/inline-script-id': string;
                            '@next/next/no-assign-module-variable': string;
                            '@next/next/no-document-import-in-page': string;
                            '@next/next/no-duplicate-head': string;
                            '@next/next/no-head-import-in-document': string;
                            '@next/next/no-script-component-in-head': string;
                        };
                    };
                    'core-web-vitals': {
                        plugins: string[];
                        extends: string[];
                        rules: {
                            '@next/next/no-html-link-for-pages': string;
                            '@next/next/no-sync-scripts': string;
                        };
                    };
                };
            };
        };
        rules: {
            '@next/next/google-font-display': string;
            '@next/next/google-font-preconnect': string;
            '@next/next/next-script-for-ga': string;
            '@next/next/no-async-client-component': string;
            '@next/next/no-before-interactive-script-outside-document': string;
            '@next/next/no-css-tags': string;
            '@next/next/no-head-element': string;
            '@next/next/no-html-link-for-pages': string;
            '@next/next/no-img-element': string;
            '@next/next/no-page-custom-font': string;
            '@next/next/no-styled-jsx-in-document': string;
            '@next/next/no-sync-scripts': string;
            '@next/next/no-title-in-document-head': string;
            '@next/next/no-typos': string;
            '@next/next/no-unwanted-polyfillio': string;
            '@next/next/inline-script-id': string;
            '@next/next/no-assign-module-variable': string;
            '@next/next/no-document-import-in-page': string;
            '@next/next/no-duplicate-head': string;
            '@next/next/no-head-import-in-document': string;
            '@next/next/no-script-component-in-head': string;
        };
    };
    coreWebVitals: {
        name: string;
        plugins: {
            '@next/next': {
                rules: {
                    'google-font-display': typeof import("./rules/google-font-display");
                    'google-font-preconnect': typeof import("./rules/google-font-preconnect");
                    'inline-script-id': typeof import("./rules/inline-script-id");
                    'next-script-for-ga': typeof import("./rules/next-script-for-ga");
                    'no-assign-module-variable': typeof import("./rules/no-assign-module-variable");
                    'no-async-client-component': typeof import("./rules/no-async-client-component");
                    'no-before-interactive-script-outside-document': typeof import("./rules/no-before-interactive-script-outside-document");
                    'no-css-tags': typeof import("./rules/no-css-tags");
                    'no-document-import-in-page': typeof import("./rules/no-document-import-in-page");
                    'no-duplicate-head': typeof import("./rules/no-duplicate-head");
                    'no-head-element': typeof import("./rules/no-head-element");
                    'no-head-import-in-document': typeof import("./rules/no-head-import-in-document");
                    'no-html-link-for-pages': typeof import("./rules/no-html-link-for-pages");
                    'no-img-element': typeof import("./rules/no-img-element");
                    'no-page-custom-font': typeof import("./rules/no-page-custom-font");
                    'no-script-component-in-head': typeof import("./rules/no-script-component-in-head");
                    'no-styled-jsx-in-document': typeof import("./rules/no-styled-jsx-in-document");
                    'no-sync-scripts': typeof import("./rules/no-sync-scripts");
                    'no-title-in-document-head': typeof import("./rules/no-title-in-document-head");
                    'no-typos': typeof import("./rules/no-typos");
                    'no-unwanted-polyfillio': typeof import("./rules/no-unwanted-polyfillio");
                };
                configs: {
                    recommended: {
                        plugins: string[];
                        rules: {
                            '@next/next/google-font-display': string;
                            '@next/next/google-font-preconnect': string;
                            '@next/next/next-script-for-ga': string;
                            '@next/next/no-async-client-component': string;
                            '@next/next/no-before-interactive-script-outside-document': string;
                            '@next/next/no-css-tags': string;
                            '@next/next/no-head-element': string;
                            '@next/next/no-html-link-for-pages': string;
                            '@next/next/no-img-element': string;
                            '@next/next/no-page-custom-font': string;
                            '@next/next/no-styled-jsx-in-document': string;
                            '@next/next/no-sync-scripts': string;
                            '@next/next/no-title-in-document-head': string;
                            '@next/next/no-typos': string;
                            '@next/next/no-unwanted-polyfillio': string;
                            '@next/next/inline-script-id': string;
                            '@next/next/no-assign-module-variable': string;
                            '@next/next/no-document-import-in-page': string;
                            '@next/next/no-duplicate-head': string;
                            '@next/next/no-head-import-in-document': string;
                            '@next/next/no-script-component-in-head': string;
                        };
                    };
                    'core-web-vitals': {
                        plugins: string[];
                        extends: string[];
                        rules: {
                            '@next/next/no-html-link-for-pages': string;
                            '@next/next/no-sync-scripts': string;
                        };
                    };
                };
            };
        };
        rules: {
            '@next/next/no-html-link-for-pages': string;
            '@next/next/no-sync-scripts': string;
            '@next/next/google-font-display': string;
            '@next/next/google-font-preconnect': string;
            '@next/next/next-script-for-ga': string;
            '@next/next/no-async-client-component': string;
            '@next/next/no-before-interactive-script-outside-document': string;
            '@next/next/no-css-tags': string;
            '@next/next/no-head-element': string;
            '@next/next/no-img-element': string;
            '@next/next/no-page-custom-font': string;
            '@next/next/no-styled-jsx-in-document': string;
            '@next/next/no-title-in-document-head': string;
            '@next/next/no-typos': string;
            '@next/next/no-unwanted-polyfillio': string;
            '@next/next/inline-script-id': string;
            '@next/next/no-assign-module-variable': string;
            '@next/next/no-document-import-in-page': string;
            '@next/next/no-duplicate-head': string;
            '@next/next/no-head-import-in-document': string;
            '@next/next/no-script-component-in-head': string;
        };
    };
};
export default plugin;
export declare const rules: {
    'google-font-display': typeof import("./rules/google-font-display");
    'google-font-preconnect': typeof import("./rules/google-font-preconnect");
    'inline-script-id': typeof import("./rules/inline-script-id");
    'next-script-for-ga': typeof import("./rules/next-script-for-ga");
    'no-assign-module-variable': typeof import("./rules/no-assign-module-variable");
    'no-async-client-component': typeof import("./rules/no-async-client-component");
    'no-before-interactive-script-outside-document': typeof import("./rules/no-before-interactive-script-outside-document");
    'no-css-tags': typeof import("./rules/no-css-tags");
    'no-document-import-in-page': typeof import("./rules/no-document-import-in-page");
    'no-duplicate-head': typeof import("./rules/no-duplicate-head");
    'no-head-element': typeof import("./rules/no-head-element");
    'no-head-import-in-document': typeof import("./rules/no-head-import-in-document");
    'no-html-link-for-pages': typeof import("./rules/no-html-link-for-pages");
    'no-img-element': typeof import("./rules/no-img-element");
    'no-page-custom-font': typeof import("./rules/no-page-custom-font");
    'no-script-component-in-head': typeof import("./rules/no-script-component-in-head");
    'no-styled-jsx-in-document': typeof import("./rules/no-styled-jsx-in-document");
    'no-sync-scripts': typeof import("./rules/no-sync-scripts");
    'no-title-in-document-head': typeof import("./rules/no-title-in-document-head");
    'no-typos': typeof import("./rules/no-typos");
    'no-unwanted-polyfillio': typeof import("./rules/no-unwanted-polyfillio");
}, configs: {
    recommended: {
        plugins: string[];
        rules: {
            '@next/next/google-font-display': string;
            '@next/next/google-font-preconnect': string;
            '@next/next/next-script-for-ga': string;
            '@next/next/no-async-client-component': string;
            '@next/next/no-before-interactive-script-outside-document': string;
            '@next/next/no-css-tags': string;
            '@next/next/no-head-element': string;
            '@next/next/no-html-link-for-pages': string;
            '@next/next/no-img-element': string;
            '@next/next/no-page-custom-font': string;
            '@next/next/no-styled-jsx-in-document': string;
            '@next/next/no-sync-scripts': string;
            '@next/next/no-title-in-document-head': string;
            '@next/next/no-typos': string;
            '@next/next/no-unwanted-polyfillio': string;
            '@next/next/inline-script-id': string;
            '@next/next/no-assign-module-variable': string;
            '@next/next/no-document-import-in-page': string;
            '@next/next/no-duplicate-head': string;
            '@next/next/no-head-import-in-document': string;
            '@next/next/no-script-component-in-head': string;
        };
    };
    'core-web-vitals': {
        plugins: string[];
        extends: string[];
        rules: {
            '@next/next/no-html-link-for-pages': string;
            '@next/next/no-sync-scripts': string;
        };
    };
};
export { flatConfig };
