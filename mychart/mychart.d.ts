declare module "data-source" {
    import { Buffer, Regl } from "regl";
    export type DataSource = ReturnType<typeof buildDataSource>;
    export type Bar = {
        epoch: number;
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
    };
    export function buildDataSource(): Bar[] & {
        buffers: (regl: Regl) => {
            ids: Buffer;
            bar2x: Buffer;
            bar3x: Buffer;
            bar2x_cpu: Float32Array;
            bar3x_cpu: Float32Array;
        };
    };
}
declare module "data-view" {
    export function buildDataView(width: number, getBarCount: () => number): {
        move: (bars: number) => void;
        squeeze: (pixels: number) => void;
        setWidth: (value: number) => void;
        getZoom: () => number;
        getOrigin: () => number;
    };
}
declare module "index" {
    import { Buffer, DrawConfig } from "regl";
    export const temp = 5;
    export const Triangle: DrawConfig<{
        color: [number, number, number, number];
        resolution: [number, number];
    }, {
        position: Buffer;
    }, {
        color: [number, number, number, number];
        position: Buffer;
    }>;
}
