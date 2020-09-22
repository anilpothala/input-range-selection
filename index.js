import { Selector } from 'testcafe';

fixture `range manipulation`
    .page `./index.html`;

test(`Modify input range value`, async t => {
    const selection = Selector('#cowbell');
    selection.value    
   await t
        .typeText(selection,'r',{ caretPos: 90 })
        
        
});
