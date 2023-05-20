import { NextRequest, NextResponse } from 'next/server'

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly;  max-age=20`,
      },
    }) // Caso não esteja logado, redireciona o usuário para logar.
  }

  return NextResponse.next() // Deixa o usuário continuar para a rota normalmente
}

export const config = {
  matcher: '/memories/:path*',
}
