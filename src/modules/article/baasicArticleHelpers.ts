import { ALPHABET as alphabet } from 'modules/article';

export class BaasicArticleHelpers {

    isUndefined(value: any): boolean {
        return typeof value === 'undefined';
    }

    private replaceDiacritics(str: string): string {
        for (let letter in alphabet) {
            str = str.replace(alphabet[letter], letter);
        }
        return str;
    }

    toSlug(str: string) {
        if (this.isUndefined(str) || str === null || str === '') {
            return str;
        }
        str = this.replaceDiacritics(str);
        str = str.toLowerCase();
        str = str.replace(/[^a-z0-9]+/g, '-');
        str = str.replace(/^-|-$/g, '');
        return str;
    }

    updateSlug(resource: any): void {
        let newSlug = this.toSlug(resource.slug);
        if (this.isUndefined(newSlug) || newSlug === null || newSlug === '') {
            newSlug = this.toSlug(resource.title);
        }

        if (!this.isUndefined(newSlug) || newSlug !== null || newSlug !== '') {
            if (resource.slug === newSlug) {
                resource.slug = newSlug;
            }
        }
    }
}