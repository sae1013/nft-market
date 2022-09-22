import 'styled-components';
declare module '*.scss'; 
// import original module declarations

// Styled Components and extend them!
declare module 'styled-components' {
  export interface GlobalTheme {
  }
}
