import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: '3iqet2ct',
	dataset: 'webshop',
	apiVersion: '2022-04-21', //dagen prosjektet ble først opprettet/sist oppdatert
	useCdn: false //false for localhost, true for netlify
});