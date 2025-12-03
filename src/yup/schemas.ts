import * as yup from 'yup';

/**
 * Schéma de validation pour un exemple de formulaire
 */
export const exampleSchema = yup.object().shape({
  name: yup
    .string()
    .required('Le nom est requis')
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),

  email: yup.string().email('Email invalide').required("L'email est requis"),

  age: yup
    .number()
    .positive("L'âge doit être un nombre positif")
    .integer("L'âge doit être un nombre entier")
    .min(18, 'Vous devez avoir au moins 18 ans')
    .max(120, "L'âge ne peut pas dépasser 120 ans"),

  description: yup
    .string()
    .max(500, 'La description ne peut pas dépasser 500 caractères'),
});

/**
 * Type TypeScript dérivé du schéma Yup
 */
export type ExampleFormData = yup.InferType<typeof exampleSchema>;
