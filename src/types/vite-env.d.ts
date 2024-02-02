/// <reference types="vite/client" />

/**
 * To enable Environment Variables IntelliSense
 */
interface ImportMetaEnv {
    readonly VITE_PORT: number;
}

/**
 * Don't touch this
 */
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
