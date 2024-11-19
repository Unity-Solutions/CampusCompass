import { Component, HostListener } from '@angular/core'

interface Button {
  label: string
  icon: string
  action: () => void
  class: string
  hidden: boolean
}

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  buttons: Button[] = [
    {
      label: 'Profile',
      icon: `
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.45019 30.6002C7.25724 29.6963 11.037 25.5369 12.1447 25.5369H23.8564C25.4615 25.5369 28.7381 28.9848 29.5502 30.2001M34.8002 18.0002C34.8002 27.2786 27.2786 34.8002 18.0002 34.8002C8.72181 34.8002 1.2002 27.2786 1.2002 18.0002C1.2002 8.72181 8.72181 1.2002 18.0002 1.2002C27.2786 1.2002 34.8002 8.72181 34.8002 18.0002ZM24.0182 12.2741C24.0182 9.06898 21.3124 6.45019 18.0007 6.45019C14.689 6.45019 11.9832 9.06898 11.9832 12.2741C11.9832 15.4793 14.689 18.098 18.0007 18.098C21.3124 18.098 24.0182 15.4793 24.0182 12.2741Z" stroke="#DDDCCA" stroke-width="2"/>
        </svg>`,
      action: () => this.profilePage(),
      class: 'profile-button',
      hidden: false,
    },
    {
      label: 'UA',
      icon: '',
      action: () => this.langSwitch(),
      class: 'lang-button',
      hidden: false,
    },
    {
      label: 'Mode',
      icon: `
        <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.6682 18.1234C23.6657 18.4509 22.602 18.627 21.5002 18.627C15.4802 18.627 10.6 13.3707 10.6 6.8868C10.6 5.70058 10.7633 4.55545 11.0671 3.47607C6.59219 4.93775 3.33496 9.41552 3.33496 14.7127C3.33496 21.1966 8.21513 26.4529 14.2351 26.4529C19.1538 26.4529 23.3115 22.9439 24.6682 18.1234Z" stroke="#DDDCCA" stroke-width="2.46154" stroke-linejoin="round"/>
        </svg>`,
      action: () => this.modeSwitch(),
      class: 'mode-switch',
      hidden: false,
    },
  ]

  hiddenButtons: Button[] = []
  hasHiddenButtons = false

  constructor() {
    this.checkButtonsVisibility()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkButtonsVisibility()
  }

  checkButtonsVisibility() {
    const screenWidth = window.innerWidth
    if (screenWidth < 1140) {
      this.moveButtonsToDropdown(3)
    } else if (screenWidth < 1180) {
      this.moveButtonsToDropdown(2)
    } else {
      this.moveButtonsToDropdown(0)
    }
  }

  moveButtonsToDropdown(hiddenCount: number) {
    this.hiddenButtons = []

    this.buttons.forEach((button, index) => {
      if (index >= this.buttons.length - hiddenCount) {
        button.hidden = true
        this.hiddenButtons.push(button)
      } else {
        button.hidden = false
      }
    })
    this.hasHiddenButtons = this.hiddenButtons.length > 0
  }
  profilePage() {
    console.log('Profile page clicked')
  }

  langSwitch() {
    console.log('Language switch clicked')
  }

  modeSwitch() {
    console.log('Mode switch clicked')
  }
}
