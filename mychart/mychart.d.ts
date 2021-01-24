declare module "index" {
    import { Buffer, DrawConfig } from "regl";
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
