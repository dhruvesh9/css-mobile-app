import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeBiometric } from "capacitor-native-biometric";
import { Toast } from '@capacitor/toast';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        const tabBar = window.document.getElementById('tab-bar-id');
        if (tabBar) {
            tabBar.style.display = 'none';
        }
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    async login() {
        const { username, password } = this.loginForm.value;

        // Hardcoded credentials for form login (mockup)
        const hardcodedUsername = 'admin';
        const hardcodedPassword = 'admin';

        if (username === hardcodedUsername && password === hardcodedPassword) {
            // Perform biometric verification if available
            if (await this.isBiometricAvailable()) {
                const verified = await this.verifyBiometricIdentity();

                if (verified) {
                    // Redirect to another screen after successful login and biometric verification
                    this.router.navigate(['/selfcare/account-overview']);
                } else {
                    this.showToastMessages('Biometric verification failed.');
                }
            } else {
                // Redirect to another screen after successful login (without biometric verification)
                this.router.navigate(['/selfcare/account-overview']);
            }
        } else {
            this.showToastMessages('Invalid username or password.');
        }
    }

    async isBiometricAvailable(): Promise<boolean> {
        try {
            const result = await NativeBiometric.isAvailable();
            return result.isAvailable;
        } catch (err) {
            console.error('Biometric availability check failed:', err);
            return false;
        }
    }

    async verifyBiometricIdentity(): Promise<boolean> {
        try {
            const result = await NativeBiometric.verifyIdentity({
                reason: 'For easy login',
                title: 'Login',
                subtitle: 'Maybe add subtitle here?',
                description: 'Maybe a description too?',
            });

            return true;
        } catch (err) {
            console.error('Biometric verification failed:', err);
            return false;
        }
    }

    async showToastMessages(message: string) {
        await Toast.show({
            text: message
        });
    }
}
