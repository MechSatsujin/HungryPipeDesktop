gdjs.Lose_32ScreenCode = {};
gdjs.Lose_32ScreenCode.localVariables = [];
gdjs.Lose_32ScreenCode.GDLoseTitleObjects1= [];
gdjs.Lose_32ScreenCode.GDLoseTitleObjects2= [];
gdjs.Lose_32ScreenCode.GDRestartObjects1= [];
gdjs.Lose_32ScreenCode.GDRestartObjects2= [];
gdjs.Lose_32ScreenCode.GDQuitObjects1= [];
gdjs.Lose_32ScreenCode.GDQuitObjects2= [];
gdjs.Lose_32ScreenCode.GDNewTextObjects1= [];
gdjs.Lose_32ScreenCode.GDNewTextObjects2= [];
gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects1= [];
gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects2= [];
gdjs.Lose_32ScreenCode.GDShredderObjects1= [];
gdjs.Lose_32ScreenCode.GDShredderObjects2= [];
gdjs.Lose_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Lose_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Lose_32ScreenCode.GDMenuBackgroundObjects1= [];
gdjs.Lose_32ScreenCode.GDMenuBackgroundObjects2= [];
gdjs.Lose_32ScreenCode.GDGameLogoObjects1= [];
gdjs.Lose_32ScreenCode.GDGameLogoObjects2= [];
gdjs.Lose_32ScreenCode.GDDropperObjects1= [];
gdjs.Lose_32ScreenCode.GDDropperObjects2= [];
gdjs.Lose_32ScreenCode.GDMouseCursorObjects1= [];
gdjs.Lose_32ScreenCode.GDMouseCursorObjects2= [];


gdjs.Lose_32ScreenCode.mapOfGDgdjs_9546Lose_959532ScreenCode_9546GDMouseCursorObjects1Objects = Hashtable.newFrom({"MouseCursor": gdjs.Lose_32ScreenCode.GDMouseCursorObjects1});
gdjs.Lose_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Lose_32ScreenCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lose_32ScreenCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.Lose_32ScreenCode.GDRestartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Lose_32ScreenCode.GDRestartObjects1[k] = gdjs.Lose_32ScreenCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.Lose_32ScreenCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Lose_32ScreenCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lose_32ScreenCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.Lose_32ScreenCode.GDQuitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Lose_32ScreenCode.GDQuitObjects1[k] = gdjs.Lose_32ScreenCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.Lose_32ScreenCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Current_Game_Score"), gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "game-over-arcade-6435.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects1[i].getBehavior("Text").setText("Score:  " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.Lose_32ScreenCode.GDMouseCursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Lose_32ScreenCode.mapOfGDgdjs_9546Lose_959532ScreenCode_9546GDMouseCursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "UI");
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseCursor"), gdjs.Lose_32ScreenCode.GDMouseCursorObjects1);
{for(var i = 0, len = gdjs.Lose_32ScreenCode.GDMouseCursorObjects1.length ;i < len;++i) {
    gdjs.Lose_32ScreenCode.GDMouseCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.Lose_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lose_32ScreenCode.GDLoseTitleObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDLoseTitleObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDRestartObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDRestartObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDQuitObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDQuitObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDNewTextObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDNewTextObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDShredderObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDShredderObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDGameLogoObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDGameLogoObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDDropperObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDDropperObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDMouseCursorObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDMouseCursorObjects2.length = 0;

gdjs.Lose_32ScreenCode.eventsList0(runtimeScene);
gdjs.Lose_32ScreenCode.GDLoseTitleObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDLoseTitleObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDRestartObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDRestartObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDQuitObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDQuitObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDNewTextObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDNewTextObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDCurrent_9595Game_9595ScoreObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDShredderObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDShredderObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDGameLogoObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDGameLogoObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDDropperObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDDropperObjects2.length = 0;
gdjs.Lose_32ScreenCode.GDMouseCursorObjects1.length = 0;
gdjs.Lose_32ScreenCode.GDMouseCursorObjects2.length = 0;


return;

}

gdjs['Lose_32ScreenCode'] = gdjs.Lose_32ScreenCode;
