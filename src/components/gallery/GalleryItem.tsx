import { GalleryItemGrid, GalleryItemList } from "./item-components";

interface GalleryItemProps {
  project: {
    id: string;
    title: string;
    shortDescription: string;
    location: string;
    installationDate: string;
    images: {
      main: string;
    };
    category?: string;
    capacity?: string;
    status?: string;
  };
  index?: number;
  viewMode?: "grid" | "list";
}

const GalleryItem = ({
  project,
  index = 0,
  viewMode = "grid",
}: GalleryItemProps) => {
  return viewMode === "list" ? (
    <GalleryItemList project={project} />
  ) : (
    <GalleryItemGrid project={project} index={index} />
  );
};

export default GalleryItem;
