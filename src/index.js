import m from 'mithril';
import Character from './components/character/index';
import Editor from './components/editor/index';
import css from './index.css';

export const character = {
	breasts     : 0,
	hairStyle  : 0,
	hairColor   : '#793131',
	eyeColor    : 'blue',
	skinColor   : 'tan'
};

m.mount(document.body, {
	view : () => {
		return m('div', { id : css.content }, [
			m(Character),
			m(Editor)
		]);
	}
});
