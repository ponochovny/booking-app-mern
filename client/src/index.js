import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SearchContextProvider } from './context/SearchContext'
import './normalize.scss'
import './index.scss'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<SearchContextProvider>
			<App />
		</SearchContextProvider>
	</React.StrictMode>
)
