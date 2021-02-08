import  colors  from "./colors";
import  screens  from "./screens";
import  spacing  from "./spacing";
import  variants  from "./variants";
import  variantsExtend  from "../extend/variants.extend";
import  spacingExtend  from '../extend/spacing.extend'
import  screensExtend  from '../extend/screens.extend'
import  colorsExtend  from '../extend/colors.extend'


export default {
    theme:{
        colors:colors,
        screens:screens,
        spacing:spacing,
        extend:{
            spacing:spacingExtend,
            screens:screensExtend,
            colors:colorsExtend
        }
    },
    variants:{...variants, ...{extend:variantsExtend}},
    presets: [require('./presets.js')]
}
