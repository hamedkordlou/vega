using System.Threading.Tasks;
using vega.Models;

namespace vega.Core
{
    public interface IVehicleRepository
    {
         Task<Vehicle> GetVehicle(int id, bool includedRelated = true);
         void Add(Vehicle vehicle);
         void Remove(Vehicle vehicle);
    }
}