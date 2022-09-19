import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'], // 需要自动引入api的库
      dts: resolve(__dirname, 'src/auto-import.d.ts') //可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts' ,注意:这里配置之后会在启动之后多次编译，具体原因无法找到，可以选择注释掉，不影响使用
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
