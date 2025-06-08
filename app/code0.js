gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDOptionsButtonObjects1= [];
gdjs.Main_32MenuCode.GDOptionsButtonObjects2= [];
gdjs.Main_32MenuCode.GDQuitButtonObjects1= [];
gdjs.Main_32MenuCode.GDQuitButtonObjects2= [];
gdjs.Main_32MenuCode.GDNewTextObjects1= [];
gdjs.Main_32MenuCode.GDNewTextObjects2= [];
gdjs.Main_32MenuCode.GDShredderObjects1= [];
gdjs.Main_32MenuCode.GDShredderObjects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDMenuBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDMenuBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDGameLogoObjects1= [];
gdjs.Main_32MenuCode.GDGameLogoObjects2= [];
gdjs.Main_32MenuCode.GDDropperObjects1= [];
gdjs.Main_32MenuCode.GDDropperObjects2= [];
gdjs.Main_32MenuCode.GDMouseCursorObjects1= [];
gdjs.Main_32MenuCode.GDMouseCursorObjects2= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMouseCursorObjects1Objects = Hashtable.newFrom({"MouseCursor": gdjs.Main_32MenuCode.GDMouseCursorObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayButtonObjects1[k] = gdjs.Main_32MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OptionsButton"), gdjs.Main_32MenuCode.GDOptionsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDOptionsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDOptionsButtonObjects1[k] = gdjs.Main_32MenuCode.GDOptionsButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Help", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Main_32MenuCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDQuitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDQuitButtonObjects1[k] = gdjs.Main_32MenuCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.Main_32MenuCode.GDMouseCursorObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMouseCursorObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "UI");
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Cool 16-bit Chiptune _ Background Music for Games  _ Funky Cruise.mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseCursor"), gdjs.Main_32MenuCode.GDMouseCursorObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMouseCursorObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMouseCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseCursor"), gdjs.Main_32MenuCode.GDMouseCursorObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMouseCursorObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMouseCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDShredderObjects1.length = 0;
gdjs.Main_32MenuCode.GDShredderObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDDropperObjects1.length = 0;
gdjs.Main_32MenuCode.GDDropperObjects2.length = 0;
gdjs.Main_32MenuCode.GDMouseCursorObjects1.length = 0;
gdjs.Main_32MenuCode.GDMouseCursorObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDOptionsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDShredderObjects1.length = 0;
gdjs.Main_32MenuCode.GDShredderObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMenuBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMenuBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDDropperObjects1.length = 0;
gdjs.Main_32MenuCode.GDDropperObjects2.length = 0;
gdjs.Main_32MenuCode.GDMouseCursorObjects1.length = 0;
gdjs.Main_32MenuCode.GDMouseCursorObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
