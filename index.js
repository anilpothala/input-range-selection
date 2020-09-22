import { Selector } from 'testcafe';

fixture `range manipulation`
    .page `./index.html`;

test(`Select an option from the drop-down menu`, async t => {
    const selection = Selector('#cowbell');
    selection.value    
   await t
        .typeText(selection,'r',{ caretPos: 90 })
        
        
});
