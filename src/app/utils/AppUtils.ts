import { Router } from '@angular/router';

export class AppUtils{
    public static KEY_CLOAK_TOKENS = "KeyCloakTokens";

    public static goToLoginPage(router:Router){
        router.navigate(['/']);
    }

    public static goToHomePage(router:Router){
        router.navigate(['/home']);
    }
}