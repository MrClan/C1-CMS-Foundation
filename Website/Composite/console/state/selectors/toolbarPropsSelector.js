import { createSelector } from 'reselect';
import Immutable from 'immutable';

const toolbarsSelector = props => props.toolbars;
const actionsSelector = props => props.actions;
const pageNameSelector = props => props.pageName;
const dirtySelector = props => props.dirty;

function replaceProviderWithFunction(item, func) {
	let actionProvider = item.get('action').toJS;
	return item.set('action', func(actionProvider, item.get('name')));
}

// Combines actions and toolbar items
export const toolbarPropsSelector = createSelector(
	toolbarsSelector,
	actionsSelector,
	pageNameSelector,
	dirtySelector,
	(toolbars, actions, pageName, dirty) => toolbars.map(toolbar =>
		toolbar.set('items', toolbar.get('items').map(item => {
			if (item.get('action') === 'save') {
				return item.withMutations(item => {
					item.set('action', actions.save(pageName));
					item.set('disabled', !dirty);
				});
			} else if (item.get('type') === 'select' || item.get('type') === 'checkboxGroup') {
				return item.set('onChange', actions.setOption(item.get('name')));
			} else if (item.get('type') === 'combobutton') {
				return item.set('buttons',
					item.get('buttons').map(
						button => replaceProviderWithFunction(button, actions.useProvider)
					));
			} else {
				let provider = item.get('provider');
				if (Immutable.Iterable.isIterable(provider)) {
					provider = provider.toJS();
				} else {
					provider = null;
				}
				return item.set('action', actions.useProvider(provider, pageName)).delete('provider');
			}
		}))
	)
);
