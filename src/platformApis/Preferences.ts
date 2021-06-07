import { Storage } from '@capacitor/storage'

export const storePreference = async (key: string, value: string) => {
    await Storage.set({ key, value })
}

export const getPreference = async (key: string) => {
    return await Storage.get({ key })
}

export const deletePreference = async (key: string) => {
    await Storage.remove({ key })
}

export const PREFERENCE_KEYS = Object.freeze({
    SHOW_WIZARD: 'SHOW_WIZARD',
})
