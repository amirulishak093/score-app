import { writable } from 'svelte/store';

export const isLoading = writable<boolean>();

isLoading.set(false);
