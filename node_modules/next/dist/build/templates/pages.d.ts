import type { IncomingMessage, ServerResponse } from 'node:http';
import { PagesRouteModule } from '../../server/route-modules/pages/module.compiled';
declare const _default: any;
export default _default;
export declare const getStaticProps: any;
export declare const getStaticPaths: any;
export declare const getServerSideProps: any;
export declare const config: any;
export declare const reportWebVitals: any;
export declare const unstable_getStaticProps: any;
export declare const unstable_getStaticPaths: any;
export declare const unstable_getStaticParams: any;
export declare const unstable_getServerProps: any;
export declare const unstable_getServerSideProps: any;
export declare const routeModule: PagesRouteModule;
export declare function handler(req: IncomingMessage, res: ServerResponse, ctx: {
    waitUntil: (prom: Promise<void>) => void;
}): Promise<void>;
