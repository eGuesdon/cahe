(function (global){
    System.config(
        {
            path:{
                'npm':'node_modules/'
            },
            map:{
                app : '../app/'
            },
            packages:{
                app:{
                    main : './Main.js',
                    defaultExtension:'js'
                }
            }
        }
    )
})(this);