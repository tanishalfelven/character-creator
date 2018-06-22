import m from 'mithril';
import css from './index.css';

export default {
	oninit : (vnode) => {
		vnode.state.selected = vnode.attrs.selected ? vnode.attrs.selected : 0;
		vnode.attrs.opts.forEach((e, i) => {
			e.onclick = () => { 
				vnode.state.selected = i; 
			};
		});
	},
	view : (vnode) => {
		return m('div', { class : css.options }, 
			vnode.attrs.opts.map((e, i) => 
				m('div', {
					class : [css.option, vnode.state.selected === i ? css.selected : ''].join(' '),
					onclick : e.onclick
				})
			)
		);
	}
};