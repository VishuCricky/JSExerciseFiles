parseInt( 0.000008 );       // 0   ("0" from "0.000008")
parseInt( 0.0000008 );      // 8   ("8" from "8e-7")
parseInt( false, 16 );      // 250 ("fa" from "false")
parseInt( parseInt, 16 );   // 15  ("f" from "function..")

parseInt( "0x10" );         // 16
parseInt( "103", 2 );       // 2