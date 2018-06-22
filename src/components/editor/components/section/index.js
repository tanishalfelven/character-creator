import m from 'mithril';
import css from './index.css';

export default {
	oninit : (vnode) => {
		vnode.state.open = false;
		vnode.state.toggleOpen = () => {
			vnode.state.open = !vnode.state.open;
		};
	},
	view : (vnode) => {
		const vs = vnode.state, va = vnode.attrs;
		return [ 
			m('div', { 
				class : [css.sectionHeader, vs.open ? css.open : ''].join(' '),
				onclick : vs.toggleOpen,
			}, va.name),
			m('div', { class : css.section }, !!vnode.children && vnode.children)
		];
	}
};
