import adapter from '@sveltejs/adapter-static';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter({
			fallback: '404.html',
			precompress: true
		}),
	},
	
};

export default config;
