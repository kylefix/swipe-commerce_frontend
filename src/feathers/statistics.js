import app from '../feathers'
const Statistics = app.service('statistics')

export const getDashboardStats = async data => {
  try {
    return Statistics.find({
      query: { dashboard: true }
    })
  } catch (error) {
    console.log(`Error creating reviews ${error}`)
  }
}

export const getReportsStats = async data => {
  try {
    return Statistics.find({
      query: { reports: true }
    })
  } catch (error) {
    console.log(`Error creating reviews ${error}`)
  }
}
