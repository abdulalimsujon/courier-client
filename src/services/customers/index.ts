import envConfig from "../../../envConfig"

export const getAllCustomers = async () => {
    const res = await fetch(`${envConfig.baseApi}/customer`)

    return  res.json()
}
