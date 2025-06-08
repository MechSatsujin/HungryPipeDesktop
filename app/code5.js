gdjs.Lose_32Screen2Code = {};
gdjs.Lose_32Screen2Code.localVariables = [];
gdjs.Lose_32Screen2Code.GDLoseTitleObjects1= [];
gdjs.Lose_32Screen2Code.GDLoseTitleObjects2= [];
gdjs.Lose_32Screen2Code.GDRestartObjects1= [];
gdjs.Lose_32Screen2Code.GDRestartObjects2= [];
gdjs.Lose_32Screen2Code.GDQuitObjects1= [];
gdjs.Lose_32Screen2Code.GDQuitObjects2= [];
gdjs.Lose_32Screen2Code.GDNewTextObjects1= [];
gdjs.Lose_32Screen2Code.GDNewTextObjects2= [];
gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects1= [];
gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects2= [];
gdjs.Lose_32Screen2Code.GDShredderObjects1= [];
gdjs.Lose_32Screen2Code.GDShredderObjects2= [];
gdjs.Lose_32Screen2Code.GDBackgroundObjects1= [];
gdjs.Lose_32Screen2Code.GDBackgroundObjects2= [];
gdjs.Lose_32Screen2Code.GDMenuBackgroundObjects1= [];
gdjs.Lose_32Screen2Code.GDMenuBackgroundObjects2= [];
gdjs.Lose_32Screen2Code.GDGameLogoObjects1= [];
gdjs.Lose_32Screen2Code.GDGameLogoObjects2= [];
gdjs.Lose_32Screen2Code.GDDropperObjects1= [];
gdjs.Lose_32Screen2Code.GDDropperObjects2= [];
gdjs.Lose_32Screen2Code.GDMouseCursorObjects1= [];
gdjs.Lose_32Screen2Code.GDMouseCursorObjects2= [];


gdjs.Lose_32Screen2Code.mapOfGDgdjs_9546Lose_959532Screen2Code_9546GDMouseCursorObjects1Objects = Hashtable.newFrom({"MouseCursor": gdjs.Lose_32Screen2Code.GDMouseCursorObjects1});
gdjs.Lose_32Screen2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Lose_32Screen2Code.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lose_32Screen2Code.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.Lose_32Screen2Code.GDRestartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Lose_32Screen2Code.GDRestartObjects1[k] = gdjs.Lose_32Screen2Code.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.Lose_32Screen2Code.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Lose_32Screen2Code.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lose_32Screen2Code.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.Lose_32Screen2Code.GDQuitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Lose_32Screen2Code.GDQuitObjects1[k] = gdjs.Lose_32Screen2Code.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.Lose_32Screen2Code.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Current_Game_Score"), gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects1);
gdjs.Lose_32Screen2Code.GDMouseCursorObjects1.length = 0;

{gdjs.evtTools.sound.playMusic(runtimeScene, "game-over-arcade-6435.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects1[i].getBehavior("Text").setText("Score:  " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Lose_32Screen2Code.mapOfGDgdjs_9546Lose_959532Screen2Code_9546GDMouseCursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "UI");
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseCursor"), gdjs.Lose_32Screen2Code.GDMouseCursorObjects1);
{for(var i = 0, len = gdjs.Lose_32Screen2Code.GDMouseCursorObjects1.length ;i < len;++i) {
    gdjs.Lose_32Screen2Code.GDMouseCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.Lose_32Screen2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lose_32Screen2Code.GDLoseTitleObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDLoseTitleObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDRestartObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDRestartObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDQuitObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDQuitObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDNewTextObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDNewTextObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDShredderObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDShredderObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDBackgroundObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDBackgroundObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDMenuBackgroundObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDMenuBackgroundObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDGameLogoObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDGameLogoObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDDropperObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDDropperObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDMouseCursorObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDMouseCursorObjects2.length = 0;

gdjs.Lose_32Screen2Code.eventsList0(runtimeScene);
gdjs.Lose_32Screen2Code.GDLoseTitleObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDLoseTitleObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDRestartObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDRestartObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDQuitObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDQuitObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDNewTextObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDNewTextObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDCurrent_9595Game_9595ScoreObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDShredderObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDShredderObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDBackgroundObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDBackgroundObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDMenuBackgroundObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDMenuBackgroundObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDGameLogoObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDGameLogoObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDDropperObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDDropperObjects2.length = 0;
gdjs.Lose_32Screen2Code.GDMouseCursorObjects1.length = 0;
gdjs.Lose_32Screen2Code.GDMouseCursorObjects2.length = 0;


return;

}

gdjs['Lose_32Screen2Code'] = gdjs.Lose_32Screen2Code;
