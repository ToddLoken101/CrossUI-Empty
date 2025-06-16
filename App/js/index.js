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
                        "id" : "operationsmenu",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption" : "Operations"
                    },
                    {
                        "id" : "controlsmenu",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption" : "Controls"
                    },
                    {
                        "id" : "windowmenu",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption" : "Window"
                    },
                    {
                        "id" : "runmenu",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption" : "Run"
                    },
                    {
                        "id" : "toolsmenu",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption" : "Tools"
                    },
                    {
                        "id" : "helpmenu",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
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