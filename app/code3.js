gdjs.Pause_32MenuCode = {};
gdjs.Pause_32MenuCode.localVariables = [];
gdjs.Pause_32MenuCode.GDPauseTitleObjects1= [];
gdjs.Pause_32MenuCode.GDPauseTitleObjects2= [];
gdjs.Pause_32MenuCode.GDResumeButtonObjects1= [];
gdjs.Pause_32MenuCode.GDResumeButtonObjects2= [];
gdjs.Pause_32MenuCode.GDRestartButtonObjects1= [];
gdjs.Pause_32MenuCode.GDRestartButtonObjects2= [];
gdjs.Pause_32MenuCode.GDQuitButtonObjects1= [];
gdjs.Pause_32MenuCode.GDQuitButtonObjects2= [];
gdjs.Pause_32MenuCode.GDShredderObjects1= [];
gdjs.Pause_32MenuCode.GDShredderObjects2= [];
gdjs.Pause_32MenuCode.GDBackgroundObjects1= [];
gdjs.Pause_32MenuCode.GDBackgroundObjects2= [];
gdjs.Pause_32MenuCode.GDMenuBackgroundObjects1= [];
gdjs.Pause_32MenuCode.GDMenuBackgroundObjects2= [];
gdjs.Pause_32MenuCode.GDGameLogoObjects1= [];
gdjs.Pause_32MenuCode.GDGameLogoObjects2= [];
gdjs.Pause_32MenuCode.GDDropperObjects1= [];
gdjs.Pause_32MenuCode.GDDropperObjects2= [];
gdjs.Pause_32MenuCode.GDMouseCursorObjects1= [];
gdjs.Pause_32MenuCode.GDMouseCursorObjects2= [];


gdjs.Pause_32MenuCode.mapOfGDgdjs_9546Pause_959532MenuCode_9546GDMouseCursorObjects1Objects = Hashtable.newFrom({"MouseCursor": gdjs.Pause_32MenuCode.GDMouseCursorObjects1});
gdjs.Pause_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ResumeButton"), gdjs.Pause_32MenuCode.GDResumeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pause_32MenuCode.GDResumeButtonObjects1.length;i<l;++i) {
    if ( gdjs.Pause_32MenuCode.GDResumeButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pause_32MenuCode.GDResumeButtonObjects1[k] = gdjs.Pause_32MenuCode.GDResumeButtonObjects1[i];
        ++k;
    }
}
gdjs.Pause_32MenuCode.GDResumeButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Pause_32MenuCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pause_32MenuCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Pause_32MenuCode.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pause_32MenuCode.GDRestartButtonObjects1[k] = gdjs.Pause_32MenuCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.Pause_32MenuCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Pause_32MenuCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pause_32MenuCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Pause_32MenuCode.GDQuitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pause_32MenuCode.GDQuitButtonObjects1[k] = gdjs.Pause_32MenuCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.Pause_32MenuCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.Pause_32MenuCode.GDMouseCursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Pause_32MenuCode.mapOfGDgdjs_9546Pause_959532MenuCode_9546GDMouseCursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "UI");
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseCursor"), gdjs.Pause_32MenuCode.GDMouseCursorObjects1);
{for(var i = 0, len = gdjs.Pause_32MenuCode.GDMouseCursorObjects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDMouseCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.Pause_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pause_32MenuCode.GDPauseTitleObjects1.length = 0;
gdjs.Pause_32MenuCode.GDPauseTitleObjects2.length = 0;
gdjs.Pause_32MenuCode.GDResumeButtonObjects1.length = 0;
gdjs.Pause_32MenuCode.GDResumeButtonObjects2.length = 0;
gdjs.Pause_32MenuCode.GDRestartButtonObjects1.length = 0;
gdjs.Pause_32MenuCode.GDRestartButtonObjects2.length = 0;
gdjs.Pause_32MenuCode.GDQuitButtonObjects1.length = 0;
gdjs.Pause_32MenuCode.GDQuitButtonObjects2.length = 0;
gdjs.Pause_32MenuCode.GDShredderObjects1.length = 0;
gdjs.Pause_32MenuCode.GDShredderObjects2.length = 0;
gdjs.Pause_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Pause_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Pause_32MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Pause_32MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Pause_32MenuCode.GDGameLogoObjects1.length = 0;
gdjs.Pause_32MenuCode.GDGameLogoObjects2.length = 0;
gdjs.Pause_32MenuCode.GDDropperObjects1.length = 0;
gdjs.Pause_32MenuCode.GDDropperObjects2.length = 0;
gdjs.Pause_32MenuCode.GDMouseCursorObjects1.length = 0;
gdjs.Pause_32MenuCode.GDMouseCursorObjects2.length = 0;

gdjs.Pause_32MenuCode.eventsList0(runtimeScene);
gdjs.Pause_32MenuCode.GDPauseTitleObjects1.length = 0;
gdjs.Pause_32MenuCode.GDPauseTitleObjects2.length = 0;
gdjs.Pause_32MenuCode.GDResumeButtonObjects1.length = 0;
gdjs.Pause_32MenuCode.GDResumeButtonObjects2.length = 0;
gdjs.Pause_32MenuCode.GDRestartButtonObjects1.length = 0;
gdjs.Pause_32MenuCode.GDRestartButtonObjects2.length = 0;
gdjs.Pause_32MenuCode.GDQuitButtonObjects1.length = 0;
gdjs.Pause_32MenuCode.GDQuitButtonObjects2.length = 0;
gdjs.Pause_32MenuCode.GDShredderObjects1.length = 0;
gdjs.Pause_32MenuCode.GDShredderObjects2.length = 0;
gdjs.Pause_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Pause_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Pause_32MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Pause_32MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Pause_32MenuCode.GDGameLogoObjects1.length = 0;
gdjs.Pause_32MenuCode.GDGameLogoObjects2.length = 0;
gdjs.Pause_32MenuCode.GDDropperObjects1.length = 0;
gdjs.Pause_32MenuCode.GDDropperObjects2.length = 0;
gdjs.Pause_32MenuCode.GDMouseCursorObjects1.length = 0;
gdjs.Pause_32MenuCode.GDMouseCursorObjects2.length = 0;


return;

}

gdjs['Pause_32MenuCode'] = gdjs.Pause_32MenuCode;
