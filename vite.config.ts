import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  // viewBox를 지워버리면 width/height로 크기 조절이 안 되므로 유지
                  removeViewBox: false,
                },
              },
            },
            // fill, stroke의 고정 색상을 currentColor로 변환 → CSS color로 아이콘 색상 변경 가능
            {
              name: 'convertColors',
              params: { currentColor: true },
            },
          ],
        },
      },
    }),
  ],
})
