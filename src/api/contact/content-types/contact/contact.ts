// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { Media_Plain } from '../../../../common/schemas-to-ts/Media';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Contact {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    firstName: string;
    lastName: string;
    phone?: string;
    email: string;
    image?: { data: Media };
  };
}
export interface Contact_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  image?: Media_Plain;
}

export interface Contact_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  image?: number;
}

export interface Contact_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  image?: AdminPanelRelationPropertyModification<Media_Plain>;
}
