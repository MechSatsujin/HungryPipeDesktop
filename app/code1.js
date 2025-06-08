gdjs.HelpCode = {};
gdjs.HelpCode.localVariables = [];
gdjs.HelpCode.GDHelpTitleObjects1= [];
gdjs.HelpCode.GDHelpTitleObjects2= [];
gdjs.HelpCode.GDNewTextObjects1= [];
gdjs.HelpCode.GDNewTextObjects2= [];
gdjs.HelpCode.GDBackButtonObjects1= [];
gdjs.HelpCode.GDBackButtonObjects2= [];
gdjs.HelpCode.GDPipeSymbolicObjects1= [];
gdjs.HelpCode.GDPipeSymbolicObjects2= [];
gdjs.HelpCode.GDHelpInfo1Objects1= [];
gdjs.HelpCode.GDHelpInfo1Objects2= [];
gdjs.HelpCode.GDHelpInfo2Objects1= [];
gdjs.HelpCode.GDHelpInfo2Objects2= [];
gdjs.HelpCode.GDHelpInfo3Objects1= [];
gdjs.HelpCode.GDHelpInfo3Objects2= [];
gdjs.HelpCode.GDHostileSymbolicObjects1= [];
gdjs.HelpCode.GDHostileSymbolicObjects2= [];
gdjs.HelpCode.GDHelpInfo4Objects1= [];
gdjs.HelpCode.GDHelpInfo4Objects2= [];
gdjs.HelpCode.GDNewSpriteObjects1= [];
gdjs.HelpCode.GDNewSpriteObjects2= [];
gdjs.HelpCode.GDTimerSymbolicObjects1= [];
gdjs.HelpCode.GDTimerSymbolicObjects2= [];
gdjs.HelpCode.GDHelpInfo5Objects1= [];
gdjs.HelpCode.GDHelpInfo5Objects2= [];
gdjs.HelpCode.GDShredderObjects1= [];
gdjs.HelpCode.GDShredderObjects2= [];
gdjs.HelpCode.GDBackgroundObjects1= [];
gdjs.HelpCode.GDBackgroundObjects2= [];
gdjs.HelpCode.GDMenuBackgroundObjects1= [];
gdjs.HelpCode.GDMenuBackgroundObjects2= [];
gdjs.HelpCode.GDGameLogoObjects1= [];
gdjs.HelpCode.GDGameLogoObjects2= [];
gdjs.HelpCode.GDDropperObjects1= [];
gdjs.HelpCode.GDDropperObjects2= [];
gdjs.HelpCode.GDMouseCursorObjects1= [];
gdjs.HelpCode.GDMouseCursorObjects2= [];


gdjs.HelpCode.mapOfGDgdjs_9546HelpCode_9546GDMouseCursorObjects1Objects = Hashtable.newFrom({"MouseCursor": gdjs.HelpCode.GDMouseCursorObjects1});
gdjs.HelpCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.HelpCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HelpCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.HelpCode.GDBackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HelpCode.GDBackButtonObjects1[k] = gdjs.HelpCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.HelpCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.HelpCode.GDMouseCursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.HelpCode.mapOfGDgdjs_9546HelpCode_9546GDMouseCursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "UI");
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseCursor"), gdjs.HelpCode.GDMouseCursorObjects1);
{for(var i = 0, len = gdjs.HelpCode.GDMouseCursorObjects1.length ;i < len;++i) {
    gdjs.HelpCode.GDMouseCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.HelpCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HelpCode.GDHelpTitleObjects1.length = 0;
gdjs.HelpCode.GDHelpTitleObjects2.length = 0;
gdjs.HelpCode.GDNewTextObjects1.length = 0;
gdjs.HelpCode.GDNewTextObjects2.length = 0;
gdjs.HelpCode.GDBackButtonObjects1.length = 0;
gdjs.HelpCode.GDBackButtonObjects2.length = 0;
gdjs.HelpCode.GDPipeSymbolicObjects1.length = 0;
gdjs.HelpCode.GDPipeSymbolicObjects2.length = 0;
gdjs.HelpCode.GDHelpInfo1Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo1Objects2.length = 0;
gdjs.HelpCode.GDHelpInfo2Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo2Objects2.length = 0;
gdjs.HelpCode.GDHelpInfo3Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo3Objects2.length = 0;
gdjs.HelpCode.GDHostileSymbolicObjects1.length = 0;
gdjs.HelpCode.GDHostileSymbolicObjects2.length = 0;
gdjs.HelpCode.GDHelpInfo4Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo4Objects2.length = 0;
gdjs.HelpCode.GDNewSpriteObjects1.length = 0;
gdjs.HelpCode.GDNewSpriteObjects2.length = 0;
gdjs.HelpCode.GDTimerSymbolicObjects1.length = 0;
gdjs.HelpCode.GDTimerSymbolicObjects2.length = 0;
gdjs.HelpCode.GDHelpInfo5Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo5Objects2.length = 0;
gdjs.HelpCode.GDShredderObjects1.length = 0;
gdjs.HelpCode.GDShredderObjects2.length = 0;
gdjs.HelpCode.GDBackgroundObjects1.length = 0;
gdjs.HelpCode.GDBackgroundObjects2.length = 0;
gdjs.HelpCode.GDMenuBackgroundObjects1.length = 0;
gdjs.HelpCode.GDMenuBackgroundObjects2.length = 0;
gdjs.HelpCode.GDGameLogoObjects1.length = 0;
gdjs.HelpCode.GDGameLogoObjects2.length = 0;
gdjs.HelpCode.GDDropperObjects1.length = 0;
gdjs.HelpCode.GDDropperObjects2.length = 0;
gdjs.HelpCode.GDMouseCursorObjects1.length = 0;
gdjs.HelpCode.GDMouseCursorObjects2.length = 0;

gdjs.HelpCode.eventsList0(runtimeScene);
gdjs.HelpCode.GDHelpTitleObjects1.length = 0;
gdjs.HelpCode.GDHelpTitleObjects2.length = 0;
gdjs.HelpCode.GDNewTextObjects1.length = 0;
gdjs.HelpCode.GDNewTextObjects2.length = 0;
gdjs.HelpCode.GDBackButtonObjects1.length = 0;
gdjs.HelpCode.GDBackButtonObjects2.length = 0;
gdjs.HelpCode.GDPipeSymbolicObjects1.length = 0;
gdjs.HelpCode.GDPipeSymbolicObjects2.length = 0;
gdjs.HelpCode.GDHelpInfo1Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo1Objects2.length = 0;
gdjs.HelpCode.GDHelpInfo2Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo2Objects2.length = 0;
gdjs.HelpCode.GDHelpInfo3Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo3Objects2.length = 0;
gdjs.HelpCode.GDHostileSymbolicObjects1.length = 0;
gdjs.HelpCode.GDHostileSymbolicObjects2.length = 0;
gdjs.HelpCode.GDHelpInfo4Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo4Objects2.length = 0;
gdjs.HelpCode.GDNewSpriteObjects1.length = 0;
gdjs.HelpCode.GDNewSpriteObjects2.length = 0;
gdjs.HelpCode.GDTimerSymbolicObjects1.length = 0;
gdjs.HelpCode.GDTimerSymbolicObjects2.length = 0;
gdjs.HelpCode.GDHelpInfo5Objects1.length = 0;
gdjs.HelpCode.GDHelpInfo5Objects2.length = 0;
gdjs.HelpCode.GDShredderObjects1.length = 0;
gdjs.HelpCode.GDShredderObjects2.length = 0;
gdjs.HelpCode.GDBackgroundObjects1.length = 0;
gdjs.HelpCode.GDBackgroundObjects2.length = 0;
gdjs.HelpCode.GDMenuBackgroundObjects1.length = 0;
gdjs.HelpCode.GDMenuBackgroundObjects2.length = 0;
gdjs.HelpCode.GDGameLogoObjects1.length = 0;
gdjs.HelpCode.GDGameLogoObjects2.length = 0;
gdjs.HelpCode.GDDropperObjects1.length = 0;
gdjs.HelpCode.GDDropperObjects2.length = 0;
gdjs.HelpCode.GDMouseCursorObjects1.length = 0;
gdjs.HelpCode.GDMouseCursorObjects2.length = 0;


return;

}

gdjs['HelpCode'] = gdjs.HelpCode;
