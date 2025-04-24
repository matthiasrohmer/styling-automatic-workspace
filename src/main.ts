import './style.css'
import devtoolsLogo from './devtools.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://developer.chrome.com" target="_blank">
      <img src="${devtoolsLogo}" class="logo" alt="DevTools logo" />
    </a>
    <h1>Chrome DevTools</h1>
    <p>Fix the distorted DevTools logo with AI assistance.</p>
  </div>
`