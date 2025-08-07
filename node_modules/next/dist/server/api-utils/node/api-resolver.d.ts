import type { IncomingMessage, ServerResponse } from 'http';
import type { __ApiPreviewProps } from '../.';
import type { InstrumentationOnRequestError } from '../../instrumentation/types';
type ApiContext = __ApiPreviewProps & {
    trustHostHeader?: boolean;
    allowedRevalidateHeaderKeys?: string[];
    hostname?: string;
    multiZoneDraftMode?: boolean;
    dev: boolean;
    projectDir: string;
};
export declare function apiResolver(req: IncomingMessage, res: ServerResponse, query: any, resolverModule: any, apiContext: ApiContext, propagateError: boolean, dev?: boolean, page?: string, onError?: InstrumentationOnRequestError): Promise<void>;
export {};
