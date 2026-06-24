import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'MKT Lab - Agencja Marketingowa'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: '#10b981', fontSize: '60px' }}>▲</span>
          <span style={{ color: 'white', fontSize: '72px', fontWeight: 'bold' }}>MKT Lab</span>
        </div>
        <div style={{ color: '#6b7280', fontSize: '32px', marginTop: '20px' }}>
          Agencja Marketingowa | Performance Marketing | SEO
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}