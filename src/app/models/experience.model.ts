export interface Experience {
    company: string;
    position: string | Record<'en' | 'es', string>;
    period: string;
    description: string | Record<'en' | 'es', string>;
    logoUrl: string;
    isCurrent: boolean;
}

