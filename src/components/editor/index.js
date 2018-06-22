import m from 'mithril';
import Section from './components/section/index';
import Options from './components/options/index';
import css from './index.css';

export default {
	view : () => m('div', { id : css.editor }, [
		m(Section, { name : 'head' }, m(Options, { opts : [{}, {}, {}] })),
		m(Section, { name : 'hair' }, m(Options, { opts : [{}, {}, {}] })),
		m(Section, { name : 'eyes' }, m(Options, { opts : [{}, {}, {}] })),
		m(Section, { name : 'body' }, m(Options, { opts : [{}, {}, {}] }))
	])
};
