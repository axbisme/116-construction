import Image from 'next/image';

const ProjectGallery = ({ title, images }: { title: string; images: string[] }) => (
  <div className="grid gap-5 md:grid-cols-2">
    {images.map((image, index) => (
      <div key={`${title}-${index}`} className={`relative overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-card ${index === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <Image src={image} alt={`${title} gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    ))}
  </div>
);

export default ProjectGallery;
