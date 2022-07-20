export const Filter = () => {
  return (
    <div className="filter">
      <form>
        <table className="filter-table">
            <tbody>
              <tr>
                <td>
                  <label for="type" >Looking For </label>
                    <select name="type" >
                      <option>Any</option>
                      <option>For Sale</option>
                      <option>For Lease</option>
                    </select>
                </td>
                <td>
                  <label for="property" >Property Type </label>
                    <select name="property">
                      <option>Condominium</option>
                      <option>House & Lot</option>
                      <option>Lot Only</option>
                    </select>
                </td>
                <td>
                  <label for="range" >Price Range </label>
                    <input type="range"></input>
                </td>
              </tr>
            </tbody>
        </table>
      </form>
    </div>
    
  )
}

