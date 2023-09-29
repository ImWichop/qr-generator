import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { QRCodeModule } from 'angularx-qrcode'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, QRCodeModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'qr-generator'
  textControl = new FormControl('')
  qrCodeDownloadLink: SafeUrl = ''

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url
  }
}
