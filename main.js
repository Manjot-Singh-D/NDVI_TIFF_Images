import GeoTIFF from "ol/source/GeoTIFF.js";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/WebGLTile.js";

const source = new GeoTIFF({
  // If only Band 1 images are used then set normalized to false
  // Band 1 images - NDVI_Nov.tiff or the images with *.FLOAT.TIFF (floating images)
  normalize: false,
  sources: [
    {
      url: "./assets/NDVI_Nov.tiff",
    },
    // {
    //   url: "./assets/floating_imgs/MOD_NDVI_M_2022-08-01_rgb_720x360.FLOAT.TIFF",
    // },
    // {
    //   url: "./assets/floating_imgs/MOD_NDVI_M_2022-09-01_rgb_720x360.FLOAT.TIFF",
    // },
    // {
    //   url: "./assets/floating_imgs/MOD_NDVI_M_2022-10-01_rgb_720x360.FLOAT.TIFF",
    // },
    // {
    //   url: "./assets/raster_imgs/MOD_NDVI_M_2022-08-01_rgb_720x360.TIFF",
    // },
    // {
    //   url: "./assets/raster_imgs/MOD_NDVI_M_2022-09-01_rgb_720x360.TIFF",
    // },
    // {
    //   url: "./assets/raster_imgs/MOD_NDVI_M_2022-10-01_rgb_720x360.TIFF",
    // },
  ],
});

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: source,
    }),
  ],
  view: source.getView(),
});
