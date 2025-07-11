// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"xui_ui_menubar2")
                .setItems([
                    {
                        "id" : "applicationmenu",
                        "sub" : [
                            {
                                "id" : "aboutmarten",
                                "caption" : "About Marten..."
                            },
                                                        {
                                "type" : "split"
                            },
                            {
                                "id" : "preferences",
                                "caption" : "Preferences..."
                                
                            },
                            {
                                "type" : "split"
                            },
                            {
                                "id" : "exit",
                                "caption" : "Exit"                               
                            }
                        ],
                        "caption" : "Application"
                    },
                    {
                        "id": "filemenu",
                        "caption": "File",
                        "sub": [
                            {
                                "id": "new",
                                "caption": "New",
                                "add": "[Ctrl+N]"
                            },
                            {
                                "id": "open",
                                "caption": "Open...",
                                "add": "[Ctrl+O]"
                            },
                            {
                                "id": "openrecent",
                                "caption": "Open Recent",
                                "sub": []
                            },
                            {
                                "id": "separator1",
                                "type": "separator"
                            },
                            {
                                "id": "close",
                                "caption": "Close",
                                "add": "[Ctrl+W]"
                            },
                            {
                                "id": "save",
                                "caption": "Save",
                                "add": "[Ctrl+S]"
                            },
                            {
                                "id": "saveas",
                                "caption": "Save As...",
                                "add": "[Ctrl+Alt+S]"
                            },
                            {
                                "id": "revert",
                                "caption": "Revert"
                            },
                            {
                                "id": "separator2",
                                "type": "separator"
                            },
                            {
                                "id": "addtoproject",
                                "caption": "Add To Project..."
                            },
                            {
                                "id": "updateproject",
                                "caption": "Update Project"
                            },
                            {
                                "id": "exportfile",
                                "caption": "Export File"
                            },
                            {
                                "id": "separator3",
                                "type": "separator"
                            },
                            {
                                "id": "pagesetup",
                                "caption": "Page Setup"
                            }
                        ]
                    },
                    {
                            "id": "editmenu",
                            "caption": "Edit",
                            "sub": [
                                {
                                    "id": "undo",
                                    "caption": "Undo",
                                    "add": "[Ctrl+Z]"
                                },
                                {
                                    "id": "redo",
                                    "caption": "Redo",
                                    "add": "[Ctrl+Shift+Z]"
                                },
                                {
                                    "id": "separator1",
                                    "type": "separator"
                                },
                                {
                                    "id": "cut",
                                    "caption": "Cut",
                                    "add": "[Ctrl+X]"
                                },
                                {
                                    "id": "copy",
                                    "caption": "Copy",
                                    "add": "[Ctrl+C]"
                                },
                                {
                                    "id": "paste",
                                    "caption": "Paste",
                                    "add": "[Ctrl+V]"
                                },
                                {
                                    "id": "delete",
                                    "caption": "Delete"
                                },
                                {
                                    "id": "separator2",
                                    "type": "separator"
                                },
                                {
                                    "id": "duplicate",
                                    "caption": "Duplicate"
                                },
                                {
                                    "id": "selectall",
                                    "caption": "Select All"
                                },
                                {
                                    "id": "separator3",
                                    "type": "separator"
                                },
                                {
                                    "id": "movetosection",
                                    "caption": "Move To Section..."
                                },
                                {
                                    "id": "propagateattribute",
                                    "caption": "Propagate Attribute"
                                },
                                {
                                    "id": "revealcontainer",
                                    "caption": "Reveal Container"
                                },
                                {
                                    "id": "separator4",
                                    "type": "separator"
                                },
                                {
                                    "id": "find",
                                    "caption": "Find..."
                                }    
                            ]
                        },
                    {
                                "id": "operationsmenu",
                                "caption": "Operations",
                                "sub": [
                                    {
                                        "id": "method",
                                        "caption": "Method",
                                        "add": "[Ctrl+Shift+W]"
                                    },
                                    {
                                        "id": "primitive",
                                        "caption": "Primitive"
                                    },
                                    {
                                        "id": "separator1",
                                        "type": "separator"
                                    },
                                    {
                                        "id": "constant",
                                        "caption": "Constant",
                                        "add": "[Ctrl+Shift+C]"
                                    },
                                    {
                                        "id": "match",
                                        "caption": "Match",
                                        "add": "[Ctrl+Shift+M]"
                                    },
                                    {
                                        "id": "persistent",
                                        "caption": "Persistent",
                                        "add": "[Ctrl+Shift+P]"
                                    },
                                    {
                                        "id": "instance",
                                        "caption": "Instance",
                                        "add": "[Ctrl+Shift+I]"
                                    },
                                    {
                                        "id": "get",
                                        "caption": "Get",
                                        "add": "[Ctrl+Shift+G]"
                                    },
                                    {
                                        "id": "set",
                                        "caption": "Set",
                                        "add": "[Ctrl+Shift+S]"
                                    },
                                    {
                                        "id": "separator2",
                                        "type": "separator"
                                    },
                                    {
                                        "id": "extconstant",
                                        "caption": "ExtConstant",
                                        "add": "[Ctrl+Shift+Alt+C]"
                                    },
                                    {
                                        "id": "extmatch",
                                        "caption": "ExtMatch",
                                        "add": "[Ctrl+Shift+Alt+M]"
                                    },
                                    {
                                        "id": "extget",
                                        "caption": "ExtGet",
                                        "add": "[Ctrl+Shift+Alt+G]"
                                    },
                                    {
                                        "id": "extset",
                                        "caption": "ExtSet",
                                        "add": "[Ctrl+Shift+Alt+S]"
                                    },
                                    {
                                        "id": "extprocedure",
                                        "caption": "ExtProcedure"
                                    },
                                    {
                                        "id": "separator3",
                                        "type": "separator"
                                    },
                                    {
                                        "id": "local",
                                        "caption": "Local",
                                        "add": "[Ctrl+Shift+L]"
                                    },
                                    {
                                        "id": "evaluate",
                                        "caption": "Evaluate",
                                        "add": "[Ctrl+Shift+E]"
                                    },
                                    {
                                        "id": "separator4",
                                        "type": "separator"
                                    },
                                    {
                                        "id": "operationstolocal",
                                        "caption": "Operations To Local"
                                    },
                                    {
                                        "id": "localtomethod",
                                        "caption": "Local To Method..."
                                    },
                                    {
                                        "id": "separator5",
                                        "type": "separator"
                                    },
                                    {
                                        "id": "tidyoperations",
                                        "caption": "Tidy Operations",
                                        "add": "[Ctrl+T]"
                                    },
                                    {
                                        "id": "resize",
                                        "caption": "Resize"
                                    }
                                ]
                            },
                        {
                                "id": "controlsmenu",
                                "caption": "Controls",
                                "sub": [
                                    {
                                        "id": "simple",
                                        "caption": "Simple",
                                        "add": "[Ctrl+Shift+A]"
                                    },
                                    {
                                        "id": "super",
                                        "caption": "Super",
                                        "add": "[Ctrl+Shift+O]"
                                    },
                                    {
                                        "id": "repeat",
                                        "caption": "Repeat",
                                        "add": "[Ctrl+Shift+R]"
                                    },
                                    {
                                        "id": "separator1",
                                        "type": "separator"
                                    },
                                    {
                                        "id": "insertnode",
                                        "caption": "Insert Node",
                                        "add": "[Ctrl+W]"
                                    },
                                    {
                                        "id": "inject",
                                        "caption": "Inject"
                                    },
                                    {
                                        "id": "list",
                                        "caption": "List",
                                        "add": "[Ctrl+Shift+S]"
                                    },
                                    {
                                        "id": "loop",
                                        "caption": "Loop"
                                    },
                                    {
                                        "id": "separator2",
                                        "type": "separator"
                                    },
                                    {
                                        "id": "reverse",
                                        "caption": "Reverse",
                                        "add": "[Ctrl+Shift+-]"
                                    },
                                    {
                                        "id": "separator3",
                                        "type": "separator"
                                    },
                                    {
                                        "id": "nextcase",
                                        "caption": "Next Case",
                                        "add": "[Ctrl+Shift+N]"
                                    },
                                    {
                                        "id": "continue",
                                        "caption": "Continue",
                                        "add": "[Ctrl+Shift+U]"
                                    },
                                    {
                                        "id": "terminate",
                                        "caption": "Terminate",
                                        "add": "[Ctrl+Shift+T]"
                                    },
                                    {
                                        "id": "finish",
                                        "caption": "Finish",
                                        "add": "[Ctrl+Shift+F]"
                                    },
                                    {
                                        "id": "skip",
                                        "caption": "Skip"
                                    },
                                    {
                                        "id": "fail",
                                        "caption": "Fail",
                                        "add": "[Ctrl+Shift+X]"
                                    }
                                ]
                            },
                    {
                        "id" : "windowmenu",
                        "sub" : [
                            {
                                "id" : "projects",
                                "caption" : "Projects",
                                "add" : "[Ctrl+J]"
                            }
                        ],
                        "caption" : "Window"
                    },
                   {
                    "id": "runmenu",
                    "caption": "Run",
                    "sub": [
                        {
                            "id": "runapplication",
                            "caption": "Run Application",
                            "add": "[Ctrl+R]"
                        },
                        {
                            "id": "runmethod",
                            "caption": "Run Method",
                            "add": "[Ctrl+D]"
                        },
                        {
                            "id": "debugmethod",
                            "caption": "Debug Method",
                            "add": "[Ctrl+Shift+D]"
                        },
                        {
                            "id": "separator1",
                            "type": "separator"
                        },
                        {
                            "id": "breakpoint",
                            "caption": "Breakpoint",
                            "add": "[Ctrl+[]"
                        },
                        {
                            "id": "showallbreakpoints",
                            "caption": "Show All Breakpoints",
                            "add": "[Ctrl+S]"
                        },
                        {
                            "id": "clearallbreakpoints",
                            "caption": "Clear All Breakpoints",
                            "add": "[Ctrl+Shift+S]"
                        },
                        {
                            "id": "separator2",
                            "type": "separator"
                        },
                        {
                            "id": "step",
                            "caption": "Step",
                            "add": "[Enter]"
                        },
                        {
                            "id": "stepover",
                            "caption": "Step Over",
                            "add": "[Tab]"
                        },
                        {
                            "id": "stepin",
                            "caption": "Step In",
                            "add": "[Ctrl+Down]"
                        },
                        {
                            "id": "stepout",
                            "caption": "Step Out",
                            "add": "[Ctrl+Up]"
                        },
                        {
                            "id": "separator3",
                            "type": "separator"
                        },
                        {
                            "id": "resume",
                            "caption": "Resume",
                            "add": "[Ctrl+Enter]"
                        },
                        {
                            "id": "stop",
                            "caption": "Stop"
                        },
                        {
                            "id": "stopall",
                            "caption": "Stop All"
                        }
                    ]
                },
                    {
                        "id" : "toolsmenu",
                        "sub" : [
                            {
                                "id" : "notoolsinstalled",
                                "caption" : "No Tools Installed"
                            },
                            {
                                "id" : "createthread",
                                "caption" : "Create Thread"                               
                            }
                        ],
                        "caption" : "Tools"
                    },
                    {
                        "id" : "helpmenu",
                        "sub" : [
                            {
                                "id" : "documentations",
                                "caption" : "Online Documentation"
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "Submenu 2 Placeholder in Code For Nested Submenus",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption" : "Help"
                    }                     
                // bottom    
                ])
                .setTop("2.2857142857142856em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});