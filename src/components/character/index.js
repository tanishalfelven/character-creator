import m from 'mithril';
import css from './index.css';

export default {
	view : () => m('div', { id : css.characterContainer }, [
		m('div', { id : css.character }, [

		]),
		m('div', { id : css.shadow })
	])
};
