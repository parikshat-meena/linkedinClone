import { Component, inject } from "@angular/core";
import { ImageUploadService } from "../../services/imageupload.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-imageupload",
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: "./imageupload.component.html",
  styleUrl: "./imageupload.component.css",
})
export class ImageuploadComponent {
  selectedFile: File | null = null;
  images: any[] = [];

  private imageUploadService = inject(ImageUploadService);

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    }
  }

  onUpload() {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(() => {
        alert("Image uploaded successfully!");
        this.fetchImages();
      });
    }
  }

  fetchImages() {
    this.imageUploadService.getImages().subscribe((data) => {
      this.images = data;
      console.log(data, "data fetched successfully");
    });
  }

  ngOnInit() {
    this.fetchImages();
  }
}
